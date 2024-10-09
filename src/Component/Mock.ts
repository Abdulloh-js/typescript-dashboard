
export type TaybleProps = {
    datas: {
      id: number;
      car: {
        img: string;
        CarName: string;
        BrandName: string;
        Cost: string;
        company: string;
        place: string;
        license: string;
        info: string;
        ID: string;
        Dates: string;
        Viewed: string;
      };
    }[];
  };

  export type TuningProps = {
    tuning: {
      id: number;
      car: {
        img: string;
        CarName: string;
        BrandName: string;
        Cost: string;
        company: string;
        place: string;
        license: string;
      };
    }[];
  };

  export type UsedProps = {
    used: {
      id: number;
      car: {
          name: string;
          cost: string;
          type: string;
          license: string;
          people: string;
          date: string;
          company: string;
          location: string;
          view: string;
          desc: {
              comfort1: string;
              comfort2: string;
              comfort3: string;
              doors: string;
              heating: string;
          };
      };
  }[];
  
  };

  export type UsedProps1 = {
    used1: {
      id: number;
      car: {
          name: string;
          cost: string;
          type: string;
          license: string;
          people: string;
          date: string;
          company: string;
          location: string;
          rate: number;
          word: string;
          word1: string;
          word2: string;
          word3: string;
          word4: string;
      };
  }[]
  
  };

  export type UsedCarProps = {
    maindata: {
      id: number;
      car: {
        name: string;
        cost: string;
        type: string;
        license: string;
        people: string;
        date: string;
        company: string;
        location: string;
        rate: number;
        word: string;
        word1: string;
        word2: string;
        word3: string;
        word4: string;
      };
    }[];
  };
  


  export type CampingProps = {
    camping: [{
      id: number,
      camping: {
          name: string,
          cost: string,
          type: string,
          license: string,
          people: string,
          phone: string,
          company: string,
          location: string,
          open: string;
          close: string;
          site: string;
          word: string;
          word1: string;
          word2: string;
          word3: string;
          word4: string;
          
      },
  },
],
  };

  

  