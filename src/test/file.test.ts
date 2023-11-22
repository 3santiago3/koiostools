import { isPdf } from '../file';

describe('isPdf', () => {
  it('应该对有效的PDF缓冲区返回true', () => {
    const pdfBuffer = Buffer.from('%PDF-1.4 ... %%EOF'); // 用实际的PDF内容替换 '...'
    expect(isPdf(pdfBuffer)).toBe(true);
  });

  it('对于非PDF缓冲区应该返回false', () => {
    const nonPdfBuffer = Buffer.from('不是PDF');
    expect(isPdf(nonPdfBuffer)).toBe(false);
  });

  it('对于空缓冲区应该返回false', () => {
    const emptyBuffer = Buffer.alloc(0);
    expect(isPdf(emptyBuffer)).toBe(false);
  });
});
