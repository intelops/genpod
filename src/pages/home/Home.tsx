import { Grid } from '@mantine/core'
import Flow from 'src/canvas/Flow'
import SideNavbar from 'src/components/common/side-nav/SideNavbar'
import Layout from '../../components/common/layout/Layout'

export default function Home() {
	return (
		<Layout>
			<Grid
				style={{
					width: '100vw',
				}}
				gutter={0}
			>
				<Grid.Col span={2}>
					<SideNavbar />
				</Grid.Col>
				<Grid.Col span={10}>
					<Flow />
				</Grid.Col>
			</Grid>
		</Layout>
	)
}
