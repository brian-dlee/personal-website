import MobileDetect from "mobile-detect";

const thisDevice = new MobileDetect(navigator.userAgent);

const isPhone = () => thisDevice.phone() !== null;
const isDesktop = () => thisDevice.mobile() === null;
const isTablet = () => thisDevice.tablet() !== null;

export { isPhone, isDesktop, isTablet };