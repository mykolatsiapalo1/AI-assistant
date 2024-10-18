interface GraphResponse {
  type: "graph";
  data: number[];
  labels: string[];
}

export interface TableResponse {
  type: "table";
  data: { name: string; age: number }[];
}

interface CodeResponse {
  type: "code";
  data: string;
}

export interface CommitsResponse {
  type: "commits";
  data: { message: string; date: string }[];
}

interface TextResponse {
  type: "text";
  data: string;
}

export type ResponseType =
  | GraphResponse
  | TableResponse
  | CodeResponse
  | CommitsResponse
  | TextResponse;

export type MockResponses = Record<string, ResponseType>;

export interface ISnippet {
  label: string;
  value: string;
}
