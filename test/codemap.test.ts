import CodeMap from '../src/codemap';
import { codeList } from './test-demo';

describe('codemap.test.ts', () => {
  const codemap = new CodeMap();
  codemap.install(codeList);

  test('CodeMap.prototype.has', () => {
    expect(codemap.has(1)).toBeTruthy();
    expect(codemap.has(2)).toBeTruthy();
    expect(codemap.has(3)).toBeTruthy();
    expect(codemap.has('testError1')).toBeTruthy();
    expect(codemap.has('testError2')).toBeFalsy();
    expect(codemap.has('testError3')).toBeTruthy();
  });

  test('CodeMap.prototype.get', () => {
    expect(codemap.get(1)).toStrictEqual(codeList[0]);
    expect(codemap.get(2)).toStrictEqual(codeList[1]);
    expect(codemap.get(3)).toStrictEqual(codeList[2]);
    expect(codemap.get('testError1')).toStrictEqual(codeList[0]);
    expect(codemap.get('testError2')).toBeUndefined();
    expect(codemap.get('testError3')).toStrictEqual(codeList[2]);
  });
});
