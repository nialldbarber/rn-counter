import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import styled from 'styled-components'

const App = () => {
	const [ count, setCount ] = useState(0)

	return (
		<View style={styles.container}>
			<Add>{count}</Add>
			<Button title="+" onPress={() => setCount(count + 1)} />
		</View>
	)
}

export default App

const Add = styled.Button`
	background: red;
	padding: 1rem 2rem;
	border: 1px solid #333;
`

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
