const DEVICE = {
  mobile: 375,
  tablet: 900,
  desk: 1440,
};

const Metrics = {
  mobile: `${DEVICE.mobile}px`,
  tablet: `${DEVICE.tablet}px`,
  desk: `${DEVICE.desk}px`,

  media: {
    // mobile: `(max-width: ${DEVICE.mobile}px)`,
    // tablet: `(min-width: ${DEVICE.tablet}px)`,
    desk: `(min-width: ${DEVICE.tablet + 1}px)`,
  },
};

export default Metrics;
