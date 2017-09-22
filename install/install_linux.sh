if [[ $EUID -ne 0 ]]; then
  echo "This installer must be run as root (run: sudo ./install/install_linux.sh)" 1>&2
  exit 1
else
  echo "Checking NodeJS installation"
  if [ $(dpkg-query -W -f='${Status}' nodejs 2>/dev/null | grep -c "ok installed") ]; then
    echo "Installing NodeJS"
    sudo apt-get install nodejs
  fi

  echo "Checking NPM (Node Package Manager) installation";
  if [$(dpkg-query -W -f='${Status}' npm 2>/dev/null | grep -c "ok installed")]; then
    echo "Installing NPM"
    sudo apt-get install npm
  fi

  echo "Installing dependencies via NPM"
  npm install

  echo "Done. Now run with: npm start"
  exit 0
fi
