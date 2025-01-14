/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GIST_DEFAULT_BRANCH, GIT_DEFAULT_BRANCH } from "../services/GitService";

export enum WorkspaceKind {
  GITHUB_GIST = "GITHUB_GIST",
  GIT = "GIT",
  LOCAL = "LOCAL",
}

export type WorkspaceOrigin = LocalOrigin | GistOrigin | GitHubOrigin;

export interface LocalOrigin {
  kind: WorkspaceKind.LOCAL;
  branch: typeof GIT_DEFAULT_BRANCH;
  url?: undefined;
}

export interface GitHubOrigin {
  kind: WorkspaceKind.GIT;
  url: URL;
  branch: string;
}

export interface GistOrigin {
  kind: WorkspaceKind.GITHUB_GIST;
  url: URL;
  branch: typeof GIST_DEFAULT_BRANCH;
}
