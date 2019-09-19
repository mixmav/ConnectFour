<template>
	<div>
		<board></board>
		<win-checker></win-checker>
		<game-controls></game-controls>
		<scoreboard></scoreboard>
	</div>
</template>


<script>

import Board from './components/Board.vue';
import WinChecker from './components/WinChecker.vue';
import GameControls from './components/GameControls.vue';
import Scoreboard from './components/Scoreboard.vue';

export default{
	components: {
		Board,
		WinChecker,
		GameControls,
		Scoreboard,
	},
}

</script>