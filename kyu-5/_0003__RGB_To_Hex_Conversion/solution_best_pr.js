const rgb = (r, g, b) => [r, g, b].map((n) => (n >= 255 && 'FF') || (n <= 0 && '00') || n.toString(16).toUpperCase().padStart(2, 0)).join('');
