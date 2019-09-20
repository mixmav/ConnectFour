<template>
	<div>
		<alert></alert>
		<board></board>
		<win-checker></win-checker>
		<game-controls></game-controls>
		<scoreboard></scoreboard>
	</div>
</template>


<script>

import Alert from './components/elements/Alert.vue';
import Board from './components/Board.vue';
import WinChecker from './components/WinChecker.vue';
import GameControls from './components/GameControls.vue';
import Scoreboard from './components/Scoreboard.vue';

export default{
	components: {
		Alert,
		Board,
		WinChecker,
		GameControls,
		Scoreboard,
	},
}

</script>