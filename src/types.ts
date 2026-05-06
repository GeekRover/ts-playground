type Animal = {
  name: string;
  sound: string;
  isHuman: boolean;
};

type Human = {
  name: string;
  isHuman: boolean;
};

const getRace = (inp: Animal | Human) => {
  if ("sound" in inp) {
    return `${inp.name} is an Animal`;
  } else {
    return `${inp.name} is an Hooman`;
  }
};
