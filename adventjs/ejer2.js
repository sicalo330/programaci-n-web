function manufacture(gifts, materials) {
    return gifts.filter(gift => {
      const giftMaterials = new Set(gift);
      for (let char of giftMaterials) {
        if (!materials.includes(char)) {
          return false;
        }
      }
      return true;
    });
  }

const gifts1 = ['tren', 'oso', 'pelota'];
const materials1 = 'tronesa';
console.log(manufacture(gifts1, materials1));