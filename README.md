# QRL Documentation Page

> Quantum Resistant Ledger


This is the documentation for the QRL project. The main project can be found at [https://theQRL.org](https://theqrl.org)

This Github project is hosted at [https://docs.theqrl.org](https://docs.theqrl.org)

## Contribute

> We welcome contributors and believe in **open source development**

If you have good information to add to the documentation, please submit a PR.
Anything from a typo to creating a complete write-up, the project and community will be better for it.

- - -

## Building these docs

Install [rvm](https://rvm.io)

```bash
rvm install "ruby-2.7.2"
rvm use ruby-2.7.2
bundle install
gem install jekyll
bash _scripts/build.sh
```

### Notes on building for Fedora 38

```bash
rvm pkg install openssl
rvm install ruby-2.7.2 --with-openssl-dir=$HOME/.rvm/usr
```


If the site builds without errors, check out the ```_site``` folder in a browser with a local server, e.g. ```http-server _site/``` if http-server is globally installed ```npm i -g http-server```

# More information

 * [theqrl.org](https://theqrl.org)
 * [Blog (Medium)](https://medium.com/the-quantum-resistant-ledger)
 * [Original Whitepaper (English)](https://github.com/theQRL/Whitepaper/blob/master/QRL_whitepaper.pdf) or [other languages](https://github.com/theQRL/Whitepaper/blob/master) [These documents are subject to change]
 * [Discord Chat](https://discord.gg/RcR9WzX)
 
* * *
