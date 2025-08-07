import React, { useState, useRef, useEffect, MouseEvent } from 'react';

interface ZoomableImageProps {
  src: string | undefined;
  alt: string;
}

interface Offset {
  x: number;
  y: number;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });
  const [start, setStart] = useState<Offset>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (e.button === 0) {
      setStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
      setIsDragging(true);
      e.preventDefault();
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setOffset({
        x: e.clientX - start.x,
        y: e.clientY - start.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    setOffset({ x: 0, y: 0 });
    console.log("toggle zoom ----- ",isZoomed)
  };

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.cursor = isDragging ? 'grabbing' : 'grab';
    }
  }, [isDragging]);

  return (
    <div
      style={{
        overflow: 'hidden',
        cursor: isZoomed ? 'zoom-out' : 'zoom-in',
        width: isZoomed ? '100%' : '100%',
        height: 'auto',
        position: 'relative',
        
      }}
      onClick={toggleZoom}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onContextMenu={handleContextMenu}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          width: isZoomed ? '200%' : '200%',
          height: isZoomed ? '200%' : 'auto',
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s',
          userSelect: 'none',
        }}
      />
    </div>
  );
};

export default ZoomableImage;
