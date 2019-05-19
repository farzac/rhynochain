[//]: # (SPDX-License-Identifier: CC-BY-4.0)

## Rhinochain
A aplicação Rhinochain cria um processo de autenticação mais robusto e ágil, por meio da combinação de biometria, senha e validação de token em contextos de acesso a lojas virtuais. A Rhinochain utiliza a cadeia de blocos blockchain para registrar as transações realizadas pelos clientes das lojas virtuais, garantindo que esses registros sejam visíveis publicamente e invioláveis.

Para instalar a Rhinochain devem ser primeiramente instalados os seguintes softwares:

Docker versão 18.06.0 ou superior

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository

-------------------------------

Docker Compose versão 1.22.0 ou superior

https://docs.docker.com/compose/install/

-------------------------------

Go versão 1.10.0 ou superior

https://medium.com/@RidhamTarpara/install-go-1-11-on-ubuntu-18-04-16-04-lts-8c098c503c5f

-------------------------------

Node.js versão 8.11.x

https://nodesource.com/blog/installing-node-js-8-tutorial-linux-via-package-manager/

-------------------------------

NPM versão 5.6.0

-------------------------------

cURL versão 7.54.0 (para fazer download de arquivos binários)

-------------------------------

Starting app 


https://hyperledger-fabric.readthedocs.io/en/latest/prereqs.html#


https://hyperledger-fabric.readthedocs.io/en/latest/prereqs.html#install-curl


https://github.com/hyperledger/fabric-samples


-------------------------------

Por favor, visite as instruções de instalação em (http://hyperledger-fabric.readthedocs.io/en/latest/install.html) para assegurar que você tem os pré-requisitos corretos instalados. Para garantir esse alinhamento use a versão de documentação compatível com a versão do software que você deseja usar.

## Download os binários e as imagens do Docker

O script [`scripts/bootstrap.sh`](https://github.com/hyperledger/fabric-samples/blob/release-1.3/scripts/bootstrap.sh) vai pré-carregar todas as imagens requeridas do docker para o Hyperledger Fabric e rotulá-las com o rótulo mais recente. Opcionalmente, especifique uma versão para fabric, fabric-ca e imagens de terceiros. As versões default são a 1.4.0, a 1.4.0 e a 0.4.14, respectivamente.

```bash
./scripts/bootstrap.sh [version] [ca version] [thirdparty_version]
```

### Integração contínua

Por favor, veja em [Continuous Integration Process](docs/fabric-samples-ci.md)

## Licença <a name="license"></a>

Os arquivos do código fonte do Projeto Hyperledger são disponibilizados sob a licença Apache. Licença, Versão 2.0 (Apache-2.0), localizada no arquivo [LICENSE](LICENSE) file.
Os arquivos de documentação do Projeto Hyperledger são disponibilizados sob a Licença Internacional Creative Commons Attribution 4.0 (CC-BY-4.0), disponível em http://creativecommons.org/licenses/by/4.0/.



