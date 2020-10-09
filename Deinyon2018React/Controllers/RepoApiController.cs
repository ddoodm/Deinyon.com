using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Deinyon2018React.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Deinyon2018React.Controllers
{
    [Produces("application/json")]
    [Route("api/repo")]
    public class RepoApiController : Controller
    {
        private readonly FileRepoSettings Settings;
        private readonly DirectoryInfo RootDirectory;

        public RepoApiController(IHostingEnvironment environment, IOptions<FileRepoSettings> settings)
        {
            this.Settings = settings.Value;

            RootDirectory = new DirectoryInfo(this.Settings.RootPath ?? environment.WebRootPath);
        }

        [HttpGet]
        public RepoListing Get(string path)
        {
            DirectoryInfo requestPath;

            path = path.Replace('/', System.IO.Path.DirectorySeparatorChar);
            path = path.TrimEnd(System.IO.Path.DirectorySeparatorChar);

            if (string.IsNullOrEmpty(path))
                requestPath = RootDirectory;
            else
                requestPath = new DirectoryInfo(Path.Combine(RootDirectory.FullName, path));

            if (!requestPath.FullName.StartsWith(RootDirectory.FullName, StringComparison.Ordinal))
                throw new InvalidOperationException();

            IEnumerable<RepoDirectory> dirs =
                from dir in requestPath.GetDirectories()
                let relativePath = Path.GetRelativePath(RootDirectory.FullName, dir.FullName)
                select new RepoDirectory(dir.Name, relativePath);

            IEnumerable<RepoFile> files =
                from file in requestPath.GetFiles()
                select new RepoFile() { Name = file.Name };

            return new RepoListing()
            {
                Directories = dirs,
                Files = files
            };
        }
    }
}