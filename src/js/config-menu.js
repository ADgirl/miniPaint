var menu_template = `
	<ul>
		<li>
			<a class="trn" href="#">文件</a>
			<ul>
				<li><a class="trn" data-target="file/new.new" href="#">新建</a></li>
				<li><div class="mid-line"></div></li>
				<li class="more">
					<a class="trn" href="#">打开</a>
					<ul>
					<li><a class="trn dots" data-target="file/open.open_file" data-key="Drag&Drop" href="#">打开文件</a></li>
					<li><a class="trn dots" data-target="file/open.open_dir" href="#">打开目录</a></li>
					<li><a class="trn dots" data-target="file/open.open_webcam" href="#">Open from Webcam</a></li>
					<li><a class="trn dots" data-target="file/open.open_url" href="#">打开网址</a></li>
					<li><a class="trn dots" data-target="file/open.open_data_url" href="#">打开数据网址</a></li>
					<li><a class="trn dots" data-target="file/open.open_template_test" href="#">Open test template</a></li>
					</ul>
				</li>
				<li><a class="trn dots" data-target="file/search.search" href="#">搜索图片</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="file/save.save" data-key="S" href="#">另存为</a></li>
				<li><a class="trn dots" data-target="file/save.save_data_url" href="#">另存为数据网址</a></li>
				<li><a class="trn dots" data-target="file/print.print" data-key="Ctrl-P" href="#">打印</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="file/quicksave.quicksave" data-key="F9" href="#">快速保存</a></li>
				<li><a class="trn" data-target="file/quickload.quickload" data-key="F10" href="#">快速加载</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">编辑</a>
			<ul>
				<li><a class="trn" data-target="edit/undo.undo" href="#">撤销</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="edit/selection.delete" data-key="Del" href="#">删除选择</a></li>
				<li><a class="trn" data-target="layer/new.new_selection" href="#">复制选择</a></li>
				<li><a class="trn" data-target="edit/paste.paste" data-key="Ctrl+V" href="#">粘贴</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="edit/selection.select_all" href="#">全选</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">图片</a>
			<ul>
				<li><a class="trn dots" data-target="image/information.information" href="#">信息</a></li>
				<li><a class="trn dots" data-target="image/size.size" href="#">尺寸</a></li>
				<li><a class="trn dots" data-target="image/trim.trim" data-key="T" href="#">剪裁</a>
				<li class="more">
					<a class="trn" href="#">缩放</a>
					<ul>
						<li><a class="trn" data-target="image/zoom.in" href="#">放大</a></li>
						<li><a class="trn" data-target="image/zoom.out" href="#">缩小</a></li>
						<li><div class="mid-line"></div></li>
						<li><a class="trn" data-target="image/zoom.original" href="#">原始尺寸</a></li>
						<li><a class="trn" data-target="image/zoom.auto" href="#">适应屏幕</a></li>
					</ul>
				</li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="image/resize.resize" href="#">调整</a></li>
				<li><a class="trn dots" data-target="image/rotate.rotate" href="#">旋转</a></li>
				<li class="more">
					<a class="trn" href="#">翻转</a>
					<ul>
						<li><a class="trn" data-target="image/flip.vertical" href="#">垂直</a></li>
						<li><a class="trn" data-target="image/flip.horizontal" href="#">水平</a></li>
					</ul>
				</li>
				<li><a class="trn dots" data-target="image/translate.translate" href="#">翻译</a></li>
				<li><a class="trn dots" data-target="image/opacity.opacity" href="#">不透明度</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="image/color_corrections.color_corrections" href="#">颜色更正</a></li>
				<li><a class="trn" data-target="image/auto_adjust.auto_adjust" href="#">自动调整颜色</a></li>
				<li><a class="trn" data-target="image/decrease_colors.decrease_colors" href="#">减少颜色深度</a></li>
				<li><a class="trn dots" data-target="image/palette.palette" href="#">调色板</a></li>
				<li><a class="trn dots" data-target="image/grid.grid" data-key="G" href="#">格</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="image/histogram.histogram" data-key="H" href="#">直方图</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">图层</a>
			<ul>
				<li><a class="trn" data-target="layer/new.new" data-key="N" href="#">新建</a></li>
				<li><a class="trn" data-target="layer/new.new_selection" href="#">新的选择</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="layer/duplicate.duplicate" href="#">重复</a></li>
				<li><a class="trn" data-target="layer/visibility.toggle" href="#">显示隐藏</a></li>
				<li><a class="trn" data-target="layer/delete.delete" href="#">删除</a></li>
				<li><a class="trn" data-target="layer/raster.raster" href="#">转换为光栅</a></li>
				<li><div class="mid-line"></div></li>
				<li class="more">
					<a class="trn" href="#">移动</a>
					<ul>
						<li><a class="trn" data-target="layer/move.up" href="#">上移</a></li>
						<li><a class="trn" data-target="layer/move.down" href="#">下移</a></li>
					</ul>
				</li>
				<li><a class="trn dots" data-target="layer/composition.composition" href="#">组成</a></li>
				<li><a class="trn dots" data-target="layer/rename.rename" href="#">重命名</a></li>
				<li><a class="trn" data-target="layer/clear.clear" href="#">清除</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="layer/differences.differences" href="#">差异下降</a></li>
				<li><a class="trn" data-target="layer/merge.merge" href="#">向下合并</a></li>
				<li><a class="trn" data-target="layer/flatten.flatten" href="#">拼合图像</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">效果</a>
			<ul id="effects_list">
				<li><div class="mid-line"></div></li>
				<li class="more">
					<a class="trn" href="#">CSS过滤器</a>
					<ul>
						<li><a class="trn dots" data-target="effects/blur.blur" href="#">高斯模糊</a>
						<li><a class="trn dots" data-target="effects/brightness.brightness" href="#">亮度</a>
						<li><a class="trn dots" data-target="effects/contrast.contrast" href="#">对比度</a>
						<li><a class="trn dots" data-target="effects/grayscale.grayscale" href="#">灰度</a>
						<li><a class="trn dots" data-target="effects/hue_rotate.hue_rotate" href="#">色调旋转</a>
						<li><a class="trn dots" data-target="effects/negative.negative" href="#">负</a>
						<li><a class="trn dots" data-target="effects/saturate.saturate" href="#">饱和度</a>
						<li><a class="trn dots" data-target="effects/sepia.sepia" href="#">棕褐色</a>
						<li><a class="trn dots" data-target="effects/shadow.shadow" href="#">阴影</a>
					</ul>
				</li>
				<li><a class="trn dots" data-target="effects/black_and_white.black_and_white" href="#">黑白</a>
				<li><a class="trn dots" data-target="effects/blueprint.blueprint" href="#">Blueprint</a>
				<li><a class="trn dots" data-target="effects/box_blur.box_blur" href="#">框模糊</a>
				<li><a class="trn dots" data-target="effects/denoise.denoise" href="#">降噪</a>
				<li><a class="trn dots" data-target="effects/dither.dither" href="#">抖动</a>
				<li><a class="trn dots" data-target="effects/dot_screen.dot_screen" href="#">点屏幕</a>
				<li><a class="trn dots" data-target="effects/edge.edge" href="#">边缘</a>
				<li><a class="trn dots" data-target="effects/emboss.emboss" href="#">浮雕</a>
				<li><a class="trn dots" data-target="effects/enrich.enrich" href="#">丰富</a>
				<li><a class="trn dots" data-target="effects/grains.grains" href="#">谷物</a>
				<li><a class="trn dots" data-target="effects/heatmap.heatmap" href="#">热图</a>
				<li><a class="trn dots" data-target="effects/mosaic.mosaic" href="#">镶嵌</a>
				<li><a class="trn dots" data-target="effects/night_vision.night_vision" href="#">Night Vision</a>
				<li><a class="trn dots" data-target="effects/oil.oil" href="#">油</a>
				<li><a class="trn dots" data-target="effects/pencil.pencil" href="#">铅笔</a>
				<li><a class="trn dots" data-target="effects/sharpen.sharpen" href="#">削尖</a>
				<li><a class="trn dots" data-target="effects/solarize.solarize" href="#">曝光过度</a>
				<li><a class="trn dots" data-target="effects/tilt_shift.tilt_shift" href="#">倾斜移位</a>
				<li><a class="trn dots" data-target="effects/vignette.vignette" href="#">小插图</a>
				<li><a class="trn dots" data-target="effects/vibrance.vibrance" href="#">鲜艳</a>
				<li><a class="trn dots" data-target="effects/vintage.vintage" href="#">酿酒</a>
				<li><a class="trn dots" data-target="effects/zoom_blur.zoom_blur" href="#">变焦模糊</a>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">工具</a>
			<ul>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="tools/borders.borders" href="#">国界</a></li>
				<li><a class="trn" data-target="tools/sprites.sprites" href="#">精灵</a></li>
				<li><a class="trn" data-target="tools/keypoints.keypoints" href="#">关键点</a></li>
				<li><a class="trn dots" data-target="tools/content_fill.content_fill" href="#">内容填写</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="tools/color_to_alpha.color_to_alpha" href="#">颜色到阿尔法</a></li>
				<li><a class="trn dots" data-target="tools/color_zoom.color_zoom" href="#">颜色缩放</a></li>
				<li><a class="trn dots" data-target="tools/replace_color.replace_color" href="#">替换颜色</a></li>
				<li><a class="trn dots" data-target="tools/restore_alpha.restore_alpha" href="#">恢复阿尔法</a></li>
				<li class="more">
					<a class="trn" href="#">External</a>
					<ul>
						<li><a class="trn external" target="_blank" href="https://tinypng.com/">Compress PNG and JPEG</a>
					</ul>
				</li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="tools/settings.settings" href="#">设置</a></li>	
			</ul>
		</li>
		<li>
			<a class="trn" href="#">Help</a>
			<ul>
				<li><a class="trn dots" data-target="help/shortcuts.shortcuts" href="#">Keyboard Shortcuts</a></li>
				<li><a class="trn external" target="_blank" href="https://github.com/viliusle/miniPaint/issues">Report issues</a></li>
				<li class="more">
					<a class="trn" href="#">Language</a>
					<ul>
						<li><a data-target="help/translate.translate.en" href="#">English</a>
						<li><div class="mid-line"></div></li>
						<li><a data-target="help/translate.translate.zh" href="#">简体中文）</a>
						<li><a data-target="help/translate.translate.es" href="#">Español</a>
						<li><a data-target="help/translate.translate.fr" href="#">French</a>	
						<li><a data-target="help/translate.translate.de" href="#">German</a>	
						<li><a data-target="help/translate.translate.it" href="#">Italiano</a>
						<li><a data-target="help/translate.translate.ja" href="#">Japanese</a>
						<li><a data-target="help/translate.translate.ko" href="#">Korean</a>		
						<li><a data-target="help/translate.translate.lt" href="#">Lietuvių</a>
						<li><a data-target="help/translate.translate.pt" href="#">Portuguese</a>	
						<li><a data-target="help/translate.translate.ru" href="#">Russian</a>	
						<li><a data-target="help/translate.translate.tr" href="#">Turkish</a>	
					</ul>
				</li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="help/about.about" href="#">About</a></li>
			</ul>
		</li>
	</ul>
`;

export default menu_template;