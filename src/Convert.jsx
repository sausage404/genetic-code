const aminos = [
    { "Phe": ["UUU", "UUC"] },
    { "Leu": ["UUA", "UUG", "CUU", "CUC", "CUA", "CUG"] },
    { "Ile": ["AUU", "AUC", "AUA"] },
    { "Met": ["AUG"] },
    { "Val": ["GUU", "GUC", "GUA", "GUG"] },
    { "Ser": ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"] },
    { "Pro": ["CCU", "CCC", "CCA", "CCG"] },
    { "Thr": ["ACU", "ACC", "ACA", "ACG"] },
    { "Ala": ["GCU", "GCC", "GCA", "GCG"] },
    { "Tyr": ["UAU", "UAC"] },
    { "His": ["CAU", "CAC"] },
    { "Gln": ["CAA", "CAG"] },
    { "Asn": ["AAU", "AAC"] },
    { "Lys": ["AAA", "AAG"] },
    { "Asp": ["GAU", "GAC"] },
    { "Glu": ["GAA", "GAG"] },
    { "Cys": ["UGU", "UGC"] },
    { "Trp": ["UGG"] },
    { "Arg": ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"] },
    { "Gly": ["GGU", "GGC", "GGA", "GGG"] },
    { "Stop": ["UAA", "UAG", "UGA"] }
]

export default class Convert {
    constructor(DNA) {
        this.DNA = DNA;
    }

    get mRNA() {
        return this.DNA.replace(/T/g, "a").replace(/A/g, "u").replace(/C/g, "g").replace(/G/g, "c").toUpperCase();
    }

    get tRNA() {
        return this.mRNA.replace(/A/g, "u").replace(/U/g, "A").replace(/C/g, "G").replace(/G/g, "C").toUpperCase();
    }

    get codons() {
        return Array.from(this.mRNA.match(/.{1,3}/g)).join("/");
    }

    get count() {
        return Array.from(this.mRNA.match(/.{1,3}/g)).length;
    }

    get amino() {
        return Array.from(this.mRNA.match(/.{1,3}/g))
            .map((v) => aminos.find((a) => a[Object.keys(a)[0]].includes(v)))
            .filter((v) => v !== undefined)
            .map((v) => Object.keys(v)[0])
            .join("-");
    }
}