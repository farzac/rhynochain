[//]: # (SPDX-License-Identifier: CC-BY-4.0)

## Rhynochain




The following softwares must be installed before proceeding:


-------------------------------


Docker version 18.06.0 or higher

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository


-------------------------------

Docker Compose version 1.22.0 or higher


https://docs.docker.com/compose/install/

-------------------------------

Go version 1.10.0 or higher


https://medium.com/@RidhamTarpara/install-go-1-11-on-ubuntu-18-04-16-04-lts-8c098c503c5f

-------------------------------

Node.js version 8.11.x

https://nodesource.com/blog/installing-node-js-8-tutorial-linux-via-package-manager/

-------------------------------

NPM version 5.6.0


-------------------------------


cURL version 7.54.0 (to download binaries)



-------------------------------

Starting app 



https://hyperledger-fabric.readthedocs.io/en/latest/prereqs.html#



https://hyperledger-fabric.readthedocs.io/en/latest/prereqs.html#install-curl



https://github.com/hyperledger/fabric-samples




-------------------------------








Please visit the [installation instructions](http://hyperledger-fabric.readthedocs.io/en/latest/install.html)
to ensure you have the correct prerequisites installed. Please use the
version of the documentation that matches the version of the software you
intend to use to ensure alignment.

## Download Binaries and Docker Images

The [`scripts/bootstrap.sh`](https://github.com/hyperledger/fabric-samples/blob/release-1.3/scripts/bootstrap.sh)
script will preload all of the requisite docker
images for Hyperledger Fabric and tag them with the 'latest' tag. Optionally,
specify a version for fabric, fabric-ca and thirdparty images. Default versions
are 1.4.0, 1.4.0 and 0.4.14 respectively.

```bash
./scripts/bootstrap.sh [version] [ca version] [thirdparty_version]
```

### Continuous Integration

Please have a look at [Continuous Integration Process](docs/fabric-samples-ci.md)

## License <a name="license"></a>

Hyperledger Project source code files are made available under the Apache
License, Version 2.0 (Apache-2.0), located in the [LICENSE](LICENSE) file.
Hyperledger Project documentation files are made available under the Creative
Commons Attribution 4.0 International License (CC-BY-4.0), available at http://creativecommons.org/licenses/by/4.0/.



