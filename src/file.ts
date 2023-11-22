/**
 * 判断给定的 Buffer 是否为 PDF 文件
 * @param buf 要判断的 Buffer
 * @returns 如果是 PDF 文件则返回 true，否则返回 false
 */
export const isPdf = (buf: Buffer): boolean => {
  return (
    Buffer.isBuffer(buf) && // 判断是否为 Buffer
    buf.lastIndexOf('%PDF-') === 0 && // 判断是否以 %PDF- 开头
    buf.lastIndexOf('%%EOF') > -1 // 判断是否包含 %%EOF
  );
};
