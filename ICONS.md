# Open Source Tools

I'm creating my icons mainly using [Inkscape](https://inkscape.org/) mainly because it's relatively easy to use and generates SVG vector graphics, that are resizable (do not pixelate). [GIMP](https://gimp.org/) is a Image processing solution a la Photoshop that is also very useful, opposed to Inkscape, this is a rather pixely business.

## Format

Usually, I create my icons and logos in 512x512 px format (for Inkscape this is a rather virtual value). In Inkscape you can set the Document size with ctrl-shift-d (file -> document settings).

## Export

The export tool (to convert to png images) can be accessed by ctrl-shift-e (file->export to PNG image).

- Set export area to **page**
- Enter 512x512 px as the destination size (usually at 96 dpi)
- Set path to public/logo512.png in your project folder.
  This can be done by clicking the button next to the path. **This will just set the target path, not yet export the image** 
- Press export, confirm replacing the existing file.

## Convert different formats and sizes

Open a new terminal in you vscode...

```ShellScript
cd public
convert -resize 192x192 logo512.png logo192.png
convert -resize 64x64   logo512.png favicon.ico
exit
```

If you get an error that convert cannot be found you need to install the imagemagick package...

```ShellScript
sudo apt install imagemagick
```
