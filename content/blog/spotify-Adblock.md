---
title: How to install spotify adblock
description: step by step installation||also works on flatpak.
date: 2023-06-05
tags: Music
---

## INSTALL

### BUILDING PACKAGES

**Before installation of package**

```bash
sudo apt-get install build-essential fakeroot devscripts
```

### RUST

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

[official doc](https://www.rust-lang.org/tools/install)

### Spotify client

IF YOU DON'T HAVE || INSTALL SPOTIFY CLIENT WITH THIS COMMANDS <br>
**You will first need to configure our debian repository:**

```bash
curl -sS https://download.spotify.com/debian/pubkey_7A3A762FAFD4A51F.gpg | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
```

Then, you can install the Spotify client:

```bash
sudo apt-get update && sudo apt-get install spotify-client
```

[official doc](https://www.spotify.com/us/download/linux/)

## spotify-adblock

More details on this [spotify-adblock](https://github.com/abba23/spotify-adblock)

```bash
git clone https://github.com/abba23/spotify-adblock.git
cd spotify-adblock
make
```

**INSTALL**

```bash
sudo make install
```

<!-- LOOKS LIKE -->

<!-- <img title="" alt="Image" width="257" height="200" data-align="inline"> -->

## desktop icon

### wget

You can integrate it with your desktop environment (create desktop icon.)

```bash
wget "https://raw.githubusercontent.com/sudiplun/.desktop/main/SpotifyAdblock.desktop" -P ~/.local/share/applications
```

### Manual

creating a `.desktop` file (e.g. `spotifyadblock.desktop`) in `~/.local/share/applications`.

```ba
[Desktop Entry]
Type=Application
Name=Spotify (adblock)
GenericName=Music Player
Icon=spotify-client
TryExec=spotify
Exec=env LD_PRELOAD=/usr/local/lib/spotify-adblock.so spotify %U
Terminal=false
MimeType=x-scheme-handler/spotify;
Categories=Audio;Music;Player;AudioVideo;
StartupWMClass=spotify
```
