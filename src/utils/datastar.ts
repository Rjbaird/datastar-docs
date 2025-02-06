import { type HtmlEscapedString } from "hono/utils/html";
import { nanoid } from "nanoid";

// Utilities
export const DatastarMessage = (data: string[]) => data.join("\n");
export const eventID = (size?: number) =>
  `${nanoid(size)}::${new Date().toISOString()}`;

// Events Options
// event: datastar-merge-signals
export const DatastarMergeSignals = "datastar-merge-signals";

// event: datastar-remove-signals
export const DatastarRemoveSignals = "datastar-remove-signals";

// event: datastar-merge-fragments
export const DatastarMergeFragments = "datastar-merge-fragments";

// event: datastar-remove-fragments
export const DatastarRemoveFragments = "datastar-remove-fragments";

// event: datastar-execute-script
export const DatastarExecuteScript = "datastar-execute-script";

// Fragments Options
// data: fragments
export const fragments = (
  fragment: HtmlEscapedString | Promise<HtmlEscapedString>
) => `fragments ${fragment}`.replace(/\n|\r/g, "");

// data: selector #foo
export const selector = (id: string) => `selector ${id}`;

// data: settleDuration 300
export const settleDuration = (ms: number) => `settleDuration ${ms}`;

// data: useViewTransition true
export const useViewTransition = (bool: boolean) => `useViewTransition ${bool}`;

// data: mergeMode morph
type mergeModes =
  | "morph"
  | "inner"
  | "outer"
  | "prepend"
  | "append"
  | "before"
  | "after"
  | "upsertAttributes";
export const mergeMode = (mode: mergeModes) => `mergeMode ${mode}`;

// Signals Options
// data: onlyIfMissing false
export const onlyIfMissing = (bool: boolean) => `onlyIfMissing ${bool}`;

// data: signals {foo: 1}
export const signals = (data: object) => `signals ${JSON.stringify(data)}`;

// data: paths foo.bar
// data: paths baz
export const paths = (data: string) => `paths ${data}`;

// Script Options
// data: autoRemove true
export const autoRemove = (bool: boolean) => `autoRemove ${bool}`;

// data: attributes type module
// data: attributes defer true
export const attributes = (attribute: string, value: string) =>
  `attributes ${attribute} ${value}`;

// data: script console.log('Hello, world!')
// data: script console.log('A second greeting')
export const script = (func: string) => `script ${func}`;
