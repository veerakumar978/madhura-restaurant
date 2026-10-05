/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — THE MADHURA LINE
   Brand Visual Signature Element
   ========================================================================== */

export class MadhuraLine {
  static create({ variant = 'teal', width = '100%', height = '1px', className = '' } = {}) {
    const line = document.createElement('div');
    line.className = `madhura-line ${variant} ${className}`;
    line.style.width = width;
    line.style.height = height;
    line.setAttribute('aria-hidden', 'true');
    return line;
  }
}
