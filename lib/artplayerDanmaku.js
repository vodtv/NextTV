/**
 * artplayer-plugin-danmuku compares config changes with JSON.stringify.
 * Function loaders stringify to undefined, so switching one loader function
 * to another can be ignored. Clear with an array first to force the update.
 */
export async function replaceDanmakuLoader(danmakuPlugin, loader) {
  if (!danmakuPlugin) return;

  danmakuPlugin.config({ danmuku: [] });
  await danmakuPlugin.load();

  danmakuPlugin.config({ danmuku: loader });
  await danmakuPlugin.load();
}
