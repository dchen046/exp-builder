export class CvTab {
    constructor(header, func) {
        this.header = header;
        this.func = func;
    }
}

export class InputInfo {
    constructor(label, type = 'text') {
        this.label = label;
        this.type = type;
    }
}