// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher';

describe('cipher', () => {

  test('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    test('should be a function', () => {
      expect(typeof window.cipher.encode).toBe('function');
    });
    test('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      //completa este test!
      expect(window.cipher.encode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

    
  });

  describe('cipher.decode', () => {

    test('should be a function', () => {
      expect(typeof window.cipher.decode).toBe('function');
    });

    test('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      //completa este test!
      expect(window.cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

  });

});
