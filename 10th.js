// object destructuring 

const band = {
    bandname : "one direction",
    famoussong : "night changes",
    year:2002,
    anothersong:"what makes you beautiful"
};

console.log(band)

// const bandname = band.bandname;
// const famoussong = band.famoussong;

// console.log(bandname)
// console.log(famoussong)


const {bandname:name,famoussong:song,...bakibadhu} = band

console.log(name)
console.log(song)
console.log(bakibadhu)

