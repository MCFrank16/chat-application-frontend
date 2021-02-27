const container = () => {
    return (
        <div className="start-container">
            <header class="start-header">
				<h1><i class="fas fa-comments"></i> Cata </h1>
			</header>
            <main class="start-main">
				<form action="">
					<div class="form-control">
						<label for="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
                            placeholder="Enter username..."
							required
						/>
					</div>
					<button type="submit" class="btn">Join</button>
				</form>
			</main>
        </div>
    )
}

export default container;
