import React from 'react';

return(
		<div className=Cadastro>
			<main className={classes.content}>
				<Container masWidth="lg" className={classes.container}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="firstName"
							name="firstName"
							label="first name"
							fullWidth
							autoComplete="fname"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="lastName"
							name="lastName"
							label="Last name"
							fullWidth
							autoComplete="lname"
						/>
					</Grid>
					<Box pi={4}>
						<Footer />
					</Box>
				</Container>
			</main>
		</div>
	);

export default Cadastro;