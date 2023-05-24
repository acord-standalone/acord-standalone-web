/**
 * @returns {"macos" | "windows" | "ios" | "android" | "linux" | null}
 */
export function getOS() {
  let userAgent = window.navigator.userAgent.toLowerCase();
  let os = null;
  if (/macintosh|macintel|macppc|mac68k|macos/.test(userAgent)) {
    os = "macos";
  } else if (/win32|win64|windows|wince/.test(userAgent)) {
    os = "windows";
  } else if (/iphone|ipad|ipod/.test(userAgent)) {
    os = "ios";
  } else if (/android/.test(userAgent)) {
    os = "android";
  } else if (!os && /linux/.test(userAgent)) {
    os = "linux";
  }

  return os;
}
