// parallel - paralelné, súbežné, čaká sa keď všetky dobehnú
// sequence - jedno po druhom
// race - spustí sa tá, ktorá sa dokončí ako prvá


function asyncTask(name, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`✅ ${name} done`);
            resolve(name); // promise sa označí ako fulfilled
        }, delay);
    });
}


async function runParallel() {
    console.log("⏳ Spúšťam operácie paralelne...");


    const results = await Promise.all([
        asyncTask("Task 1", 3000),
        asyncTask("Task 2", 2000),
        asyncTask("Task 3", 1000)
    ]);


    console.log("🎉 Všetky úlohy sú dokončené:", results);
}


runParallel();


// Všetky tri úlohy sa spustia súčasne.
// Výstup uvidíme až po najdlhšej operáci(3s).
// Použitie Promise.all() zaistí, že sa čaká na všetky operácie.
