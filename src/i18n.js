﻿let i18n = new Map([
    [
        'zh-CN', {
            ui: new Map([
                /* UI text */
                ['Pin sidebar', '固定侧边栏'],
                ['Sound notifications', '提示音'],
                ['Screen notifications', '浏览器通知'],
                ['Join/left notify', '显示加入、退出消息'],
                ['Allow LaTeX', '显示LaTeX公式'],
                ['Allow Highlight', '代码高亮'],
                ['Allow Images', '显示图片'],
                ['Embed images like: ![Title](https://i.imgur.com/image.png)', '发图格式：![标题](图片地址)'],
                ['Allow All Images (Not Recommended)', '关闭图片域名限制（不推荐）'],
                ['Check allow images to set this. If this is not checked, only images hosted at trusted domain names can be rendered. Note that this may enable IP grabbers to grab your IP address.', '勾选显示图片以设置这个选项。如果没有勾选这个选项，只有受信任的域名上的图片会被显示。请注意，勾选这个选项会产生被IP记录器记录IP地址的风险。'],
                ['Soft @Mention', '@中间加空格'],
                ['Record Messages', '客户端记录信息'],
                ['Mobile buttons', '手机版按钮'],
                ['Index Online Count', '首页显示在线人数'],
                ['Language', '语言'],
                ['Color scheme', '配色方案'],
                ['Highlight scheme', '代码高亮方案'],
                ['Connect tunnel', '连接地址'],
                ['Add tunnel', "添加加速隧道"],
                ['Remove tunnel', "移除加速隧道"],
                ['Upload Image', '上传图片'],
                ['Clear all messages', '清空本页聊天记录'],
                ['Set auto color', '设置用户名自动改色'],
                ['Set Massage Template', '设置消息模板'],
                ['Copy JSON Record', '复制JSON记录'],
                ['Copy Message Record', '复制消息记录'],
                ['Don\'t Click', '隐藏功能'],
                ['Users online', '在线列表'],
                ['(Click user to invite; right click to ignore.)', '(点击邀请,右键拉黑)'],
                ['Advance Notice Before Sending Long Messages', '发送长消息自动预警'],
                ['Fold Long Messages', '折叠长消息'],
                ['Send', '发送'],
                ['Settings', '设置'],
                ['Can Edit Message', '可编辑消息'],
                ['Message Preview', '预览消息'],
                ['Right-click menu', '右键菜单'],
            ]),
            prompt: new Map([
                /* Alerts and prompts */
                ['Nickname:', '请输入用户名：'],
                ['Your nickname color:(press enter without inputing to reset; input "random" to set it to random)', '你的用户名颜色：（直接按回车重置，输入“random”设为随机。）'],
                ['Rejoin or join a Channel to make it go into effect.', '重新加入或加入别的频道来使用户名颜色生效。'],
                [/Suessfully set your auto nickname color to #([0-9A-Fa-f]{6})\. /, '成功设置用户名颜色为#$1。'],
                ['Suessfully set your auto nickname color to random. ', '成功设置用户名颜色为随机。'],
                ['Suessfully disabled autocolor.', '成功关闭自动用户名改色。'],
                ['Invalid color. Please give color in hex RGB code.', '非法色值。请使用十六进制RBG色码。'],
                ['Your template string:(use %m to replace your message content. press enter without inputing to reset.)', '你的模板字符串：（用%m代替你的消息内容。直接按下回车来关闭模板。）'],
                ['Suessfully set template.', '成功设置模板。'],
                ['Suessfully disabled template.', '成功关闭模板。'],
                ['Invalid template. ', '非法模板。'],
                [' successfully copied to clipboard. ', '成功复制到剪贴板。'],
                ['JSON log', 'JSON记录'],
                ['Normal log', '普通记录'],
                ['Please save it in case it may be lost.', '请及时保存记录，以免丢失。'],
                ['Failed to copy log to clipboard.', '复制失败。'],
                ['target channel:(defaultly random channel generated by server)', '你要邀请对方到的频道名称：（默认为随机频道）'],
                ['Image host provided by Dataeverything team. All uploads on your own responsibility.', '由Dataeverything Team提供图床。使用该图床做出的所有行为由你自负责任。'],
                ['Warning, please verify this is where you want to go: ', '警告，请确认以下链接是你要去的：'],
                ['Automatically converted into upper case by client.', '客户端已自动转换为大写。'],
                ["Please input the tunnel URL.(IF YOU DON'T KNOW WHAT THIS DOES, CLICK CANCEL.)", "请输入隧道URL.(如果你不知道这是做什么的，请点击取消。)"],
                ["Invaild tunnel URL.", "非法的隧道URL."],
                ['Input command:(This is for the developers to access/test some special experimental functions.)', '输入指令：（这是供开发者访问/测试一些实验功能的功能）'],
                [`Please enter a new name, preferably different from your previous one`, '请输入一个新名称，最好不要和你的名称一样']
            ]),
            system: new Map([
                /* System messages */
                ['Users online: ', '在线用户：'],
                ['Thanks for using hackchat++ client! Source code at: ', '感谢使用hackchat++！代码开源在：'],
                [/^([a-zA-Z0-9_]{1,24}) joined$/, '$1 加入了聊天室'],
                [/^([a-zA-Z0-9_]{1,24}) left$/, '$1 离开了聊天室'],
                ['You cancelled joining. Press enter at the input field to reconnect.', '你取消了加入。在输入框上按回车可以重新加入。'],
                ['Server disconnected. ', '掉线了！'],
                ['Attempting to reconnect. . .', '正在尝试重连……'],
                ['Failed to connect to server. When you think there is chance to succeed in reconnecting, press enter at the input field to reconnect.', '连接到服务器失败。如果你想重连，在输入框上按回车即可。'],
                [/You may be kicked or moved to this channel by force to channel \?(.+) \. Unable to get full user list\. /, '你可能被踢到或者强制移到了频道 ?$1 。无法获取完整用户列表。'],
                [/Unexpected Channel \?(.+) \. You may be kicked or moved to this channel by force\. /, '异常：你现在在频道 ?$1 。你可能被踢出了，或者被强制移动了。'],
                [/Unexpected Channel \?(.+) \. You may be locked out from \?(.+) \. You may also be kicked or moved to this channel by force\. /, '异常：你现在在频道 ?$1 。可能是 ?$2 锁房了，把你屏蔽在了 ?$1 。也可能是你被踢出了，或者被强制移动了。'],
                [/You are now at \?(.+) \. A mod has moved you、. /, '你现在在 ?$1 了。一名管理员移动了你。'],
                ['Please refresh to apply language. Multi language is in test and not perfect yet. ', '请刷新来应用语言设置。多语言支持目前还在测试当中，并不完美。'],
                [/Ignored nick ([a-zA-Z0-9_]{1,24})\./, '已忽略$1的消息。'],
                [/Cancelled ignoring nick ([a-zA-Z0-9_]{1,24})\./, '已取消忽略$1的消息。'],
                [/^Kicked ([a-zA-Z0-9_]{1,24})$/, '已踢出 $1'],
                [/^Banned ([a-zA-Z0-9_]{1,24})$/, '已封禁 $1'],
                [/^([a-zA-Z0-9_]{1,24}) was moved into \?(.+)$/, '$1 被移动到 ?$2'],
                ["Sucessfully added tunnel.", "成功增加隧道。"],
                ["Sucessfully removed tunnel.", "成功移除隧道。"],
                ["Sucessfully changed tunnel, refresh to apply the changes.", "成功更改隧道设置，刷新来应用更改。"],
                ["The LaTeX included in your text may cause you got kicked, rejected sending.", "你的文本中含有部分可能导致你被踢出的特殊LaTeX公式，已中断发送。"],
		["Please don't court death with fancy moves. :)", "请不要花式作死。 :)"],
            ]),
            info: new Map([
                /* Chatroom info */
                [/^You whispered to @([a-zA-Z0-9_]{1,24}): /, '你对 @$1 私聊：'],
                [/^([a-zA-Z0-9_]{1,24}) whispered: /, '$1 对你私聊：'],
                [/^You invited ([a-zA-Z0-9_]{1,24}) to /, '你邀请 $1 到 '],
                [/^([a-zA-Z0-9_]{1,24}) invited you to /, '$1 邀请你到 '],
                ['Nickname must consist of up to 24 letters, numbers, and underscores', '用户名只能包含24个及以下字符，只能包含字母、数字和下划线'],
                ['Nickname taken', '该用户名已被占用'],
                ['You have been denied access to that channel and have been moved somewhere else. Retry later or wait for a mod to move you.', '系统阻止了你加入该频道，把你移到了别的地方。请稍后再试或等待管理员移动你。'],
                ['Enter the following to join (case-sensitive):', '请输入以下验证码：（大小写敏感）'],
                ['You are joining channels too fast. Wait a moment and try again.', '你加入得太快了，请稍后再试。'],
                ['You are sending too much text. Wait a moment and try again.\nPress the up arrow key to restore your last message.', '你发送了太多消息。请稍后再试。按方向上键来恢复没发出去的消息。'],
                ['You are changing colors too fast. Wait a moment before trying again.', '你更改颜色太快了，请稍后再试。'],
                ['You are being rate-limited or blocked.', '你被暂时限制了，或者被封禁了。'],
                ['Wait a moment and try again.', '请稍后再试。'],
                [/^([a-zA-Z0-9_]{1,24}) is now ([a-zA-Z0-9_]{1,24})$/, '$1 改名为 $2'],
                ['You are enabling developer mode. I want you to be aware of what you are doing. Enabling this mode will disable some protections and may lead to password theft. We recommend using a non-personal password in incognito mode to test untrusted things. Executing this command may result in your password being stolen. To proceed with the execution, please run `/debug ([1-9]{10})`.', '你正在开启开发者模式，您应该知道您在做什么，开启此模式将会禁用一些保护并可能导致密码泄露。我们建议您在隐身模式使用非个人密码来测试不信任的东西。继续执行可能导致密码泄露。要继续执行，请发送：`/debug $1`'],
                ['Do not keep developer mode enabled for too long. After using it, please refresh immediately to restore protection.', '不要保持在开发者模式过长时间，结束使用后，请刷新页面以恢复保护。'],
                ['No such function: (.+)', '指令不存在：$1'],
		['You may not join that channel.', '你不能加入这个频道'],
                /* Help */
                ['All commands:', '全部命令：'],
                ['Category:', '分\ufeff类\ufeff：'],
                ['Name:', '名\ufeff字\ufeff：'],
                ['Admin:', '站\ufeff长\ufeff：'],
                ['Core:', '核\ufeff心\ufeff：'],
                ['Internal:', '内\ufeff部\ufeff：'],
                ['Mod:', '管\ufeff理\ufeff员\ufeff：'],
                ['For specific help on certain commands, use either:\nText: `/help <command name>`\nAPI: `{cmd: \'help\', command: \'<command name>\'}`', '要得到关于特定命令的帮助，你可以使用以下任一方法：\n文字：`/help <命令名字>`\nAPI：`{cmd: \'help\'}, command: \'<命令名字>\'`'],
                ['Unknown command: ', '未知命令：'],
                ['Unknown command', '未知命令'],
                [/ command:$/m, '命令：'],
                ['**Name:**', '**名字：**'],
                ['**Aliases:**', '**别名：**'],
                ['|None|', '|无|'],
                ['|Admin|', '|站长|'],
                ['|Core|', '|核心|'],
                ['|Internal|', '|内部|'],
                ['|Mod|', '|管理员|'],
                ['**Description:**', '**描述：**'],
                ['**Usage:** ', '**用法：**'],
                ['API: ', 'API：'],
                ['Text: ', '文字：'],
                ['**Required Parameters:**', '**参数：**'],
            ]),
            home: new Map([
                /* Frontpage text */
                ['Welcome to hack.chat, a minimal, distraction-free chat application.', '欢迎来到hack.chat，最小化、无干扰的聊天室。'],
                ['You are now experiencing hack.chat with a tweaked client: hackchat\\+\\+. Official hack.chat client is at: https://hack.chat.', '你正在使用一个改版客户端，hackchat++，体验 hack.chat。官方客户端在此：https://hack.chat。'],
                ['Channels are created, joined and shared with the url, create your own channel by changing the text after the question mark. Example: ', '频道是通过网址创建、加入和分享的。通过改变问号后的内容，你就可以创建自己的频道。例如：'],
                ['There are no channel lists *for normal users*, so a secret channel name can be used for private discussions.', '没有*公开给普通人*的频道列表，所以一个秘密的频道名称可以用于私密交流。'],
                ['Here are some pre-made channels you can join: ', '以下是一些你可以加入的公开频道：'],
                ['(Online counts disabled)', '（在线人数显示已关闭）'],
                ['(Getting online counts...)', '（正在获取在线人数……）'],
                [/\((\d+) users online, /, '（当你进入这个首页时，全站在线用户数为$1，'],
                [/(\d+) channels existing when you enter this page\)/, '全站频道数为$1）'],
                ['And here\'s a random one generated just for you: ', '这是一个为你准备的随机频道： '],
                ['Formatting:', '排版：'],
                ['Notice: Dont send raw source code without using a code block!', '注意：不要不带代码块直接发源代码！'],
                ['Surround LaTeX with a dollar sign for inline style $\\zeta(2) = \\pi^2/6$, and two dollars for display. ', '用美元符号包裹行内公式： $\\zeta(2) = \\pi^2/6$，用两个美元符号包裹块级公式。'],
                ['For syntax highlight, wrap the code like: \\`\\`\\`<language> <the code>\\`\\`\\` where <language> is any known programming language.', '像这样包裹代码来获得语法高亮：\\`\\`\\`<编程语言名称> <代码>\\`\\`\\`'],
                ['Current Github: ', '当前Github仓库：'],
                ['Legacy GitHub: ', '旧版Github仓库：'],
                ['Bots, Android clients, desktop clients, browser extensions, docker images, programming libraries, server modules and more:', '机器人，安卓客户端，桌面客户端，浏览器扩展，Docker映像，编程库，服务端模块和更多：'],
                ['Server and web client released under the WTFPL and MIT open source license.', '服务端和网页客户端分别采用WTFPL和MIT协议开源。'],
                ['No message history is retained on the hack.chat server, but in certain channels there may be bots made by users which record messages.', '没有聊天记录保存在hack.chat服务器上，但是在某些频道，可能有用户做的机器人保存聊天记录。'],
                ['Github of hackchat++ (aka hackchat-client-plus): ', 'hackchat++（又名hackchat client plus）的Github：'],
                ['Hosted at https://hcer.netlify.app/ and https://hc.thz.cool/ (thanks to Maggie, aka THZ, for hosting).', '托管在 https://hcer.netlify.app/ 和 https://hc.thz.cool/（感谢Maggie，即THZ，提供托管）。'],
                ['Links: ', '友情链接：'],
                [' (Thanks for providing replying script!) ', '（感谢提供回复功能的代码）']
            ]),
            menu: new Map([
                ['Reply', '回复'],
                ['Copy Text', '复制内容'],
                ['Delete (Only client)', '删除（仅客户端）'],
                ['Copy Color', '复制颜色'],
                ['Update History', '消息更新历史'],
                ['Reply', '回复'],
                ['UnIgnore Nick', '取消屏蔽名称'],
                ['Ignore Nick', '屏蔽名称'],
                ['UnIgnore Hash', '取消屏蔽Hash'],
                ['Ignore Hash', '屏蔽Hash'],
                ['Update (Edit)', '更新消息（编辑）'],
                [':( WHAT ARE YOU DOING???', ':( 你在做什么？？？'],
                ['UnIgnore Trip', '取消屏蔽Trip'],
                ['Ignore Trip', '屏蔽Trip'],
                ['Invite', '邀请']
            ]),
        }
    ]
])

function i18ntranslate(text, rules = ['all']) {
    if (lang == 'en-US' || !i18n.has(lang)) return text
    if (rules == ['all']) {
        for (let rule in i18n.get(lang)) {
            for (let item of i18n.get(lang)[rule]) {
                text = text.replace(item[0], item[1])
            }
        }
    } else if (typeof rules == 'string') {
        for (let item of i18n.get(lang)[rules]) {
            text = text.replace(item[0], item[1])
        }
    } else if (Array.isArray(rules)) {
        for (let rule of rules) {
            for (let item of i18n.get(lang)[rule]) {
                text = text.replace(item[0], item[1])
            }
        }
    }
    return text
}

let lang = 'en-US'

if (localStorageGet('i18n') && localStorageGet('i18n') != 'en-US') {
    if (i18n.has(localStorageGet('i18n'))) {
        lang = localStorageGet('i18n')
        document.querySelector('html').lang = lang
        document.querySelectorAll('[tr]').forEach((el) => {
            if (el.tagName == 'button') debugger
            el.innerHTML = i18ntranslate(el.innerHTML, 'ui')
        })
    } else {
        alert(`Sorry, we have not made language ${localStorageGet('i18n')}. You can try: zh-CN.`)
    }
}
