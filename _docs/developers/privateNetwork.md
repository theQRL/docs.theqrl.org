# Setting up a QRL private network
This documentation assumes that you have already followed the QRL node installation instructions as mentioned in this link  https://docs.theqrl.org/node/QRLnode/

### 1. Configuring config.yml

In order to run private chain, you need to create ~/.qrl/config.yml with following content

```
genesis_difficulty: 500
mining_enabled: True
peer_list: []
```


##### Description:
<br />
| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| genesis_difficulty | UInt64 | Initial difficulty to mine the block. The lower the value the easier it will be to mine the first block. |
| mining_enabled | Boolean | Enable or disables mining |
| peer_list | String[] | List of strings containing "ip:port". It overrides the default peer list. |


**Note:** If you previously ran QRL mainnet on the same node then you need to delete ~/.qrl/data/


### 2. Running QRL Node

```
start_qrl --miningAddress Q010800dd14a340e6daf28d4dab9e42a534177db5bf06ef1bb300452f606a17331bacca9453aac1 --mockGetMeasurement 1000000000
```


##### Description:
<br />
| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| miningAddress | String | Any valid QRL address on which mining rewards will be credited. |
| mockGetMeasurement | Uint64 | A higher mockGetMeasurement eases it for the hardware to mine the blocks. It simply makes the difficulty constant. The value 1000000000 is enough to mine using a very low end hardware. |

