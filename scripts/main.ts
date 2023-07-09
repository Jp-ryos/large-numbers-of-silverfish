import { MinecraftEntityTypes, world } from "@minecraft/server";


world.afterEvents.blockExplode.subscribe(event => {
    const { x, y, z } = event.block.location;
    event.dimension.runCommandAsync(`summon ${MinecraftEntityTypes.silverfish.id} ${x} ${y} ${z}`);
})