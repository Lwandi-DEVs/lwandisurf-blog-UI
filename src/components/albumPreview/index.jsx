import React from "react";

function AlbumPreview({id, title, image}) {
    return (
        <a href={`/album/${id}`} title="Álbum">
            <div
                className="album-preview"
                style={{ backgroundImage: `url('${image}')` }}
                >
                <span>{title}</span>
            </div>
        </a>
    );
}

export default AlbumPreview;
