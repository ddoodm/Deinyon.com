using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace Deinyon2018React.Models
{
    public class RepoListing
    {
        public IEnumerable<RepoFile> Files { get; set; }
        public IEnumerable<RepoDirectory> Directories { get; set; }
    }

    public class RepoItem
    {
        public string Name { get; set; }
        public string Path { get; set; }
    }

    public class RepoFile : RepoItem
    {

    }

    public class RepoDirectory : RepoItem
    {
        public RepoDirectory(string name, string path)
        {
            this.Name = name;
            this.Path = path.Replace(System.IO.Path.DirectorySeparatorChar, '/');
        }
    }
}
