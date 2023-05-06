# merge-png-emoji
Do you hate your Android emojis? Yeah, me too. Well, after an obscene amount of research, I've found a way to merge Apple Emojis with any font.

## What do you need?
- vtracer

This can be installed through Cargo - Rust's package manager.
- python3

We all know how to install Python.
- a lot of patience

Nanoemoji is woefully slow. Enjoy the wait.
- FontLab

To merge another font with the converted emoji.
- node.js

I wrote a quick and dirty script to do vtracer for everything. This could be done with bash but I think I'm gonna choose javascript over bash.

## What does this do?
It uses apple-emoji-linux and converts their pngs into svgs using vtracer and then builds a COLRv0 font from that. Afterwards, you can merge another font to it and both its glyphs and the emojis will be rendered. Magic.

## Does it work?
Yes.
![](https://cdn.discordapp.com/attachments/1050164559907934388/1104383769026236527/Screenshot_20230506_132638_zFont_3.jpg)
