class CodeFormatter {
  formatJavaScript(code) {
    // Basic JavaScript formatting
    return code
      .replace(/;\s*}/g, ';\n}')
      .replace(/{\s*/g, '{\n  ')
      .replace(/}\s*/g, '\n}')
      .split('\n')
      .map(line => line.trim())
      .join('\n');
  }
  
  formatPython(code) {
    // Basic Python formatting
    return code
      .split('\n')
      .map(line => line.rstrip())
      .join('\n');
  }
  
  minify(code) {
    return code
      .replace(/\s+/g, ' ')
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*}\s*/g, '}')
      .trim();
  }
}

module.exports = new CodeFormatter();
