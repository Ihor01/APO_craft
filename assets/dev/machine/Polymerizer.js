IDRegistry.genBlockID("polymerizer");
Block.createBlockWithRotation("polymerizer", [
    {name: "Polymerizer", texture: [["std_bottom", 0], ["std_top", 0], ["std_side", 0], ["polymerizer_front", 0], ["std_side", 0], ["std_side", 0]], inCreative: true}
], "opaque");

var guiPolymerizer = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Polymerizer"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "polymerizer_bar_background", scale: GUI_BAR_STANDART_SCALE},
        {type: "bitmap", x: 450, y: 150, bitmap: "energy_small_background", scale: GUI_BAR_STANDART_SCALE}
    ],
    
    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "polymerizer_bar_scale", scale: GUI_BAR_STANDART_SCALE},
        "energyScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GUI_BAR_STANDART_SCALE},
        "slotSource": {type: "slot", x: 441, y: 75},
        "slotEnergy": {type: "slot", x: 441, y: 212},
        "slotResult": {type: "slot", x: 625, y: 142},
        "slotUpgrade1": {type: "slot", x: 820, y: 48},
        "slotUpgrade2": {type: "slot", x: 820, y: 112},
        "slotUpgrade3": {type: "slot", x: 820, y: 176},
        "slotUpgrade4": {type: "slot", x: 820, y: 240},
    }
});

MachineEssentials.registerStandart(BlockID.polymerizer, {
    getTransportSlots: function(){
        return {input: ["slotSource"], output: ["slotResult"]};
    },
    
    result: function(resultSlots, result){
        resultSlots[0].id = result.id;
        resultSlots[0].data = result.data;
        resultSlots[0].count += result.count;
    },

    getGuiScreen: function(){
      return guiPolymerizer;
    }
    
}, {
    machine_name: "polymerizer",
    source_slot: "slotSource",
    result_slots: ["slotResult"],
    progress_scale: "progressScale",
    energy_scale: "energyScale"
});



Callback.addCallback("PreLoaded", function(){
    // Recipies
    MachineRecipeRegistry.registerRecipesFor("polymerizer", {
        "ItemID.propylene": {id: ItemID.granulesPolypropylene, count: 1, data: 0}
    }, true);
});

