import { ISnippet, MockResponses } from "@/lib/types";

export const mockResponses: MockResponses = {
  "show graph": {
    type: "graph",
    data: [12, 19, 3, 5, 2, 3],
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  },
  "show table": {
    type: "table",
    data: [
      { name: "John", age: 28 },
      { name: "Jane", age: 25 },
    ],
  },
  "show code": {
    type: "code",
    data: `const sum = (a, b) => a + b;`,
  },
  "show commits": {
    type: "commits",
    data: [
      { message: "Initial commit", date: "2024-10-10" },
      { message: "Add chatbot feature", date: "2024-10-11" },
    ],
  },
};

export const snippets: ISnippet[] = [
  {
    label: "Show Graph",
    value: "show graph",
  },
  {
    label: "Show Table",
    value: "show table",
  },
  {
    label: "Show Code",
    value: "show code",
  },
  {
    label: "Show Commits",
    value: "show commits",
  },
];
