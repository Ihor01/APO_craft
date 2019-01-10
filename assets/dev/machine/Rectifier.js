IDRegistry.genBlockID("rectifier");
Block.createBlockWithRotation("rectifier", [
    {name: "Rectifier", texture: [["std_bottom", 0], ["rectifier_top", 0], ["std_side", 0], ["rectifier_front", 0], ["std_side", 0], ["std_side", 0]], inCreative: true}
], "opaque");

var layoutRectifier = {
    standart: {
        header: {text: {text: "Rectifier"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 216, bitmap: "rectifier_bar_background", scale: GUI_BAR_STANDART_SCALE},
        {type: "bitmap", x: 490, y: 220, bitmap: "energy_small_background", scale: GUI_BAR_STANDART_SCALE}
    ],
    
    elements: {
        "progressScale": {type: "scale", x: 530, y: 216, direction: 0, value: 0.5, bitmap: "rectifier_bar_scale", scale: GUI_BAR_STANDART_SCALE},
        "energyScale": {type: "scale", x: 490, y: 220, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GUI_BAR_STANDART_SCALE},
        "slotSource": {type: "slot", x: 510, y: 155},
        "slotEnergy": {type: "slot", x: 510, y: 278},
        "slotUpgrade1": {type: "slot", x: 820, y: 48},
        "slotUpgrade2": {type: "slot", x: 820, y: 112},
        "slotUpgrade3": {type: "slot", x: 820, y: 176},
        "slotUpgrade4": {type: "slot", x: 820, y: 240},
    }
}
var resultSlotsRectifier = [];
for(var i = 0; i < 8; i++){
    let angle = i * 45 * Math.PI / 180;
    dx = 150 * Math.cos(angle);
    dy = 150 * Math.sin(angle);
    layoutRectifier.elements["slotResult" + i] = {type: "slot", x: 510 + dx, y: 215 + dy};
    resultSlotsRectifier.push("slotResult" + i);
}


var guiRectifier = new UI.StandartWindow(layoutRectifier);



MachineEssentials.registerStandart(BlockID.rectifier, {
    getTransportSlots: function(){
        return {input: ["slotSource"], output: resultSlotsRectifier};
    },
    
    result: function(resultSlots, result){
        for(var i in resultSlots){
            resultSlots[i].id = result[i * 2];
            resultSlots[i].data = 0;
            resultSlots[i].count += result[i * 2 + 1];
        }
    },

    getGuiScreen: function(){
        return guiRectifier;
    }
    
}, {
    machine_name: "rectifier",
    source_slot: "slotSource",
    result_slots: resultSlotsRectifier,
    progress_scale: "progressScale",
    energy_scale: "energyScale"
});



Callback.addCallback("PostLoaded", function(){
    // Recipies
    MachineRecipeRegistry.registerRecipesFor("rectifier", {
        "BlockID.oreShaleOil": [ItemID.waste, 1, ItemID.dustQuartz, 1, ItemID.bitumen, 1, ItemID.propylene, 1, ItemID.oilResin, 1, ItemID.oilFuel, 1, ItemID.petrol, 1, ItemID.kerosene, 1],
        "BlockID.asphalt": [ItemID.bitumen, 1, 13, 2]
    }, true);
});

