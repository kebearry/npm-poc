import React from "react";
const DownloadButton = ({ filename, filesize, count }) => {
    return (
        <a href="http://www.example.com/folder/file.zip" class="download_button">
            <div class="downloadicon">
                <div class="cloud"><div class="arrowdown"></div></div>
            </div>
            <div class="filename"><span class="value">{filename}</span></div>
            <div class="filesize">Size : <span class="value">{filesize}</span></div>
            <div class="downloads">Downloads : <span class="value">{count}</span></div>
        </a>
    );
}
export default DownloadButton;