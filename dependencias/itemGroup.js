const { EventEmitter } = require('events');
//@ts-ignore

const util = require('util');
const debug = util.debuglog('nodes7');

class S7ItemGroup extends EventEmitter {


    addItems(tags) {
        debug("S7ItemGroup addItems", tags);

        let tagsArr = Array.isArray(tags) ? tags : [tags];

        for (const tag of tagsArr) {
            debug("S7ItemGroup addItems item", tag);

            if (tag instanceof S7Item){
                this._items.set(tag.name, tag);
            } else if (typeof tag === 'string') {
                let addr = this._translationCallback(tag);
                let item = new S7Item(tag, addr);
    
                this._items.set(tag, item);
            } else {
                throw new NodeS7Error('ERR_INVALID_ARGUMENT', "Tags must be of type string or S7Item");
            }
        }

        // invalidate computed read packets
        this._invalidateReadPackets()
    }

}

module.exports = S7ItemGroup;