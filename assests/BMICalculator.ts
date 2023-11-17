export async function calculateBMI(weight: string , height: string) {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);
    
    const heightInMeters = parsedHeight / 100; 
    const bmi = parsedWeight / (heightInMeters ** 2);
    return Math.round(bmi * 100) / 100;
  }
