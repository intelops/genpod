import { NodeTypes } from 'src/canvas/store/types.store'

export type DBNodeFormData = Partial<{
	id: string
	name: string
	description: string
	port: string
	type: NodeTypes
}>

export type DBNodeFormDataUI = Omit<DBNodeFormData, 'id' | 'type'>
