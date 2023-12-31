require("task")

require("format").setup({
	temp_file = function(file_path)
		local core = require("core")
		local new_file_path = core.file.root_path()
			.. "/_"
			.. core.file.name(file_path)
			.. "."
			.. (core.file.extension(file_path) or "")
		return new_file_path
	end,
	filetypes = {
		glsl = require("format.builtins.prettier"),
	},
})
