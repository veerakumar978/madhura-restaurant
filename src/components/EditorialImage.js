/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — EDITORIAL IMAGE HELPER
   ========================================================================== */

export class EditorialImage {
  static create({
    src,
    alt,
    width,
    height,
    caption = '',
    label = '',
    loading = 'lazy',
    className = ''
  }) {
    const container = document.createElement('div');
    container.className = `editorial-image-frame ${className}`;

    container.innerHTML = `
      <img 
        src="${src}" 
        alt="${alt}" 
        width="${width}" 
        height="${height}" 
        loading="${loading}"
        decoding="async"
      />
      ${(caption || label) ? `
        <div class="editorial-image-meta">
          ${label ? `<span class="editorial-image-label">${label}</span>` : ''}
          ${caption ? `<span class="editorial-image-caption">${caption}</span>` : ''}
        </div>
      ` : ''}
    `;

    return container;
  }
}
