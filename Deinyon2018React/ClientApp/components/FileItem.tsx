import * as React from "react";

import { RepoItem } from "./RepoItem";

export interface FileItemProps {
    name: string;
    path: string;
}

interface FileItemState {

}

export abstract class FileItem extends RepoItem<FileItemProps, FileItemState> {

}
