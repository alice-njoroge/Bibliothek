export class DOMCreator {
    #_currentNode;

    constructor() {
        this.#_currentNode = null;
        return this //allows us to chain methods of a class to a newly created instance
    }

    /**
     * creates an element and adds specified attributes
     * @param type
     * @param attributes
     * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
     */

     #_create (type, attributes={}) {
        const domNode = document.createElement(type);
        for(let attribute in attributes){
            if (attribute === 'class'){ //TODO: classList API is very robust; make use of add,remove,toggle and contains
                domNode.classList.add(attributes[attribute])
            }
            domNode[attribute] = attributes[attribute];
        }
        this.#_currentNode = domNode

    }
    //TODO: append allows you to append multiple nodes
    static appendNode(parentNode, childNode) {

         if (Array.isArray(childNode)){
             console.log("parebbt", parentNode.getNode())
             parentNode.getNode().append(...childNode.map(node => node.getNode()))
         }else{
             parentNode.getNode().append(childNode.getNode());
         }
        return this;

    }
    getNode(){
         return this.#_currentNode;
    }

    /**
     * @param node
     * @param type
     * @param listener
     */
    static eventListener(node, type, listener) {
         node.addEventListener(type, listener)
    }

    create(type, attributes={}){
         this.#_create(type, attributes)
        return this;
    }

}
export const DOMInstance = new DOMCreator(); //singleton

export function $creator(type, attributes){ //factory function
    return new DOMCreator().create(type, attributes)
}

