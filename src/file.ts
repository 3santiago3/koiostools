export const isPdf = (buf: Buffer): boolean => {
  return (
    Buffer.isBuffer(buf) &&
    buf.lastIndexOf('%PDF-') === 0 &&
    buf.lastIndexOf('%%EOF') > -1
  );
};
